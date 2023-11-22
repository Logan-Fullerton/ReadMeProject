

function getLicenseBadgeUrl(license) {
  const licenseName = license.toLowerCase().replace(/ /g,'-');
  const badgeUrl = `https://img.shields.io/badge/license-${licenseName}-COLOR.svg`;
  const badgeImg = `![badge](${badgeUrl})`;
  return badgeImg;
}



module.exports = {
  getLicenseBadgeUrl,
};
