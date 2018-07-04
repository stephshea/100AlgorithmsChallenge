function domainType(domains) {
  
  let terms = {
    "org" : "organization",
    "com": "commercial",
    "net" : "network",
    "info" : "information"
  }

let domainTypes = [];

for (let i = 0; i < domains.length; i++) {
  if (domains[i].includes("org")) {
    domainTypes.push("organization");
    }
  if (domains[i].includes("com")) {
    domainTypes.push("commercial");
    }
  if (domains[i].includes("net")) {
    domainTypes.push("network");
    }
  if (domains[i].includes("info")) {
    domainTypes.push("information");
    }
  }
   return domainTypes;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));

