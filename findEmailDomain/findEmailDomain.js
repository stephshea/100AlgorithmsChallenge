function findEmailDomain(address) {
  const addressSplit = address.split("");
  var reg = /^[a-z]+$/i;
  for (let i = 0; i < addressSplit.length; i++) {
    if (addressSplit[i].includes("@") && reg.test(addressSplit[i + 1])) {
      return addressSplit.splice(i).join("");   
    }
  }
}
console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
