export function validateOffer(data) {
  if (!data) return false;
  const offer = parseFloat(data.offer);
  if (isNaN(offer) || offer <= 0) return false;
  if (!data.meeting || data.meeting.trim().length < 3) return false;
  return true;
}
