function domain_finder(url) {
  url = url.replace("http://", "");
  url = url.replace("https://", "");
  url = url.replace("www.", "");

  return url.split(".")[0];
}

console.log(domain_finder("www.google.com"));
