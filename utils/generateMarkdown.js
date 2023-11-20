
function renderLicenseBadge(license) {
  let licenseBadge = '';
  switch (license) {
    case 'Apache2.0':
      licenseBadge = getLicenseBadgeUrl(license);
      break;
    default:
      licenseBadge = '';
      break;
  }
  return licenseBadge;
}

function getLicenseBadgeUrl(license) {
  const licenseName = license.toLowerCase().replace(/ /g,'-');
  const badgeUrl = `https://img.shields.io/badge/license-${licenseName}-COLOR.svg`;
  const badgeImg = `![badge](${badgeUrl})`;
  return badgeImg;
}



module.exports = {
  renderLicenseBadge,
  getLicenseBadgeUrl,
};
