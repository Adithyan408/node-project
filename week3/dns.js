import dns from 'dns';
import { hostname } from 'os';

let file = "example.com"

dns.lookup(file,(err, address, family) => {
    console.log(file, address, family)
})

dns.reverse("8.8.8.8", (err, hostname) => {
    console.log(hostname);
    
}) 