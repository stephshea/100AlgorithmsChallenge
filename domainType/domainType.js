function domainType(domains) {

let domainTypes = [];
for (let i = 0; i < domains.length; i++) {
  const domain = domains[i].split(".");
  const type = domain[domain.length - 1];
  if (type === "org") {
    domainTypes.push("organization");
    }
  if (type === "com") {
    domainTypes.push("commercial");
    }
  if (type === "net") {
    domainTypes.push("network");
    }
  if (type === "info") {
    domainTypes.push("information");
    }
  }
   return domainTypes;
}
console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));
console.log(domainType(["com.net.info", "org.com.net", "net.com.org", "info.net.com"]));
