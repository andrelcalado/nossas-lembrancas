<p align="left">
   <img src="./.github/docs/images/logo.png" />
</p>

# Nossas Lembranças

[![Author](https://img.shields.io/badge/author-AndreLuis-0052a6?style=flat-square)](https://github.com/andrelcalado)
[![Languages](https://img.shields.io/github/languages/count/andrelcalado/nossas-lembrancas?color=%230052a6&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/andrelcalado/nossas-lembrancas?color=0052a6&style=flat-square)](https://github.com/andrelcalado/nossas-lembrancas/stargazers)

---
<p align="center">
   <img src="./.github/docs/images/app-mobile.png" width="188"/>
   <img src="./.github/docs/images/app-desktop.png" width="680"/>
</p>

<p align="center">
   <a href="https://nossaslembrancas.app">Go check it out 🎉</a>
</p>

---

# :pushpin: Table of Contents

* [Requirements](#requirements)
* [Running Locally](#running-locally)
* [Issues](#bug-issues)
* [Contributing](#tada-contributing)

## :wrench: Requirements

1. Node v18^. [[Install here]](https://nodejs.org/en/download)

2. Firebase APIKEY, AUTHDOMAIN, PROJECTID, STORAGEBUCKET, MSENDERID, APPID and MEASUREMENTID from Firebase. [[You can get here]](https://console.firebase.google.com/)

3. PRICEID of each product from Stripe. [[You can get here]](https://dashboard.stripe.com/products?active=true)

4. PUB_KEY, SECRET_KEY and WEBHOOK_SECRET from Stripe. [[You can get here]](https://dashboard.stripe.com/apikeys)

5. WEBHOOK_SECRET, ACCESS_TOKEN and PUBLIC_KEY from Mercado Pago. [[You can get here]](https://www.mercadopago.com.br/developers/panel/)

#### Define environment variables
```bash
cp .env.example .env.local
```

#### Install dependencies
```bash
yarn
```

## :rocket: Running Locally

After done all [requirements](#requirements), only run this command:

```bash
yarn run dev
```

# :bug: Issues

Feel free to **file a new issue** with a respective title and description. If you already found a solution to your problem, **I would love to review your pull request**!

# :tada: Contributing

Check out the [contributing](https://github.com/andrelcalado/nossas-lembrancas/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing