[1mdiff --git a/src/components/Product.js b/src/components/Product.js[m
[1mindex 79295ec..fa94d62 100644[m
[1m--- a/src/components/Product.js[m
[1m+++ b/src/components/Product.js[m
[36m@@ -27,7 +27,6 @@[m [mexport default function Product(){[m
     return ([m
         <>[m
             <h1>Products Page</h1>[m
[31m-            <p>Youre a nerd</p>[m
             <ul className="product__list">[m
                 {loading ? <h1>Loading...</h1> : null}[m
                 {error ? <h1>Error</h1> : null}[m
