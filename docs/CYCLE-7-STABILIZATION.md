CYCLE #7 - STABILIZATION PASS

PROBLEM SUMMARY:
- Multiple overlapping state systems exist (statusEngine, productStatus, lock, offerWorkflow)
- state.status is mutated in several places without single authority
- offer + status + audit systems are partially duplicated

DECISIONS:
1. statusEngine.js becomes the ONLY authority for product status
2. productStatus.js removed from active usage (deprecated)
3. lock.js logic merged into statusEngine responsibilities
4. offerWorkflow.js remains but no longer directly mutates state.status
5. state.status becomes derived output only (not manually trusted source)

RULE CHANGE:
- status is computed, not manually assigned across modules

NEXT STEP (Cycle #8):
- enforce reducer-style state mutation pattern
- isolate persistence layer into single gateway
