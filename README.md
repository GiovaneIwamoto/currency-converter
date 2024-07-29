# CURRENCY CONVERTER

### **OVERVIEW**

Currency converter that allows users to convert between different types of monetary units according to their choice. The app fetches the exchange rates by consuming an external API and displays the conversion result to the user.

[![Icons](https://skillicons.dev/icons?i=html,css,js,postman,nodejs&theme=dark)](https://skillicons.dev)

---

### **API ENDPOINTS**

> [!IMPORTANT]
> The base route for conversion-related endpoint is /convert, serving as the primary access point for conversion operation.

| **HTTP VERB** | **ENDPOINT**                        | **ACTION**        |
| ------------- | ----------------------------------- | ----------------- |
| GET           | `/?fromCurrency=USD&toCurrency=EUR` | Retrieve cotation |

> [!TIP]
> Import the Postman JSON file, which can be found in the root directory of the project, into Postman. This file will serve as a template for conducting API request testing, providing predefined configurations and requests for ease of use.

---

### **APP USAGE**

```ruby
"SELECT CURRENCIES": Choose the currency you want to convert from in the dropdown menu and the currency you want to convert to.

"ENTER AMOUNT": Enter the amount you want to convert in the input field. By default, it is set to 1.

"RESULT DISPLAY": The converted amount, conversion rate and the date of the conversion will be displayed.
```

![Converter Image](/img/converter_image.png)

---

### EXTERNAL API CONSUME:

This application consumes an external API to fetch currency conversion data. The API used is provided by [awesome-api](economia.awesomeapi.com.br) and offers currency conversion rates between different currency pairs.

The _GetCurrencyData_ function in the services folder sends a request to the API endpoint with the specified _fromCurrency_ and _toCurrency_ parameters. Upon receiving a successful response, it extracts relevant information such as the currency pair name, cotation, and the creation date of the data returning the following JSON body:

```json
{
    "name": "US Dollar/Euro",
    "high": "0.9227",
    "create_date": "2024-04-07 18:03:05"
}
```

> [!NOTE]
> This retrieved data is then utilized within the application for currency conversion purposes. In case of any errors during the API request or data extraction process, appropriate error handling mechanisms are in place to ensure smooth functioning of the application.

---

### **INSTALLATION GUIDE**

Clone this repository [currency-converter](https://github.com/GiovaneIwamoto/currency-converter.git) and navigate to the main branch.

Run the following command to install all the dependencies needs.

```ruby
$ npm install
```

Run the following command to start the local server hosted at http://localhost:3000.

```ruby
$ npm run dev
```

---

### **AUTHOR**

-   Giovane Hashinokuti Iwamoto - Computer Science student at UFMS - Brazil - MS

I am always open to receiving constructive criticism and suggestions for improvement in my developed code. I believe that feedback is an essential part of the learning and growth process, and I am eager to learn from others and make my code the best it can be. Whether it's a minor tweak or a major overhaul, I am willing to consider all suggestions and implement the changes that will benefit my code and its users.
