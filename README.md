# CONVERSOR DE MOEDAS

### **OVERVIEW**

Currency converter that allows users to convert between different types of monetary units according to their choice. The app fetches the exchange rates by consuming an external API and displays the conversion result to the user.

### **INSTALLATION GUIDE**

Clone this repository [currency-converter](https://github.com/Compass-pb-aws-2024-MARCO/sprint-2-pb-aws-marco) and navigate to the _equipe-7_ branch.

Run `npm install` to install all the dependencies needs.

Run `npm run dev` to start the local server hosted at http://localhost:3000.

### **API ENDPOINTS**

| **HTTP VERB** | **ENDPOINT**                        | **ACTION**        |
| ------------- | ----------------------------------- | ----------------- |
| GET           | `/?fromCurrency=USD&toCurrency=EUR` | Retrieve cotation |

The base route for convert endpoints is `/convert`.

Import the _Postman.json_ file located in the root directory of the project into Postman as a template for API request testing.

### **APP USAGE**

**Select Currencies**: Choose the currency you want to convert from in the first dropdown menu and the currency you want to convert to in the second dropdown menu.

**Enter Amount**: Enter the amount you want to convert in the input field. By default, it is set to 1.

**Result Display**: The converted amount will be shown in the _amount-to_ section. Additionally, the conversion rate and the date of the conversion will be displayed in the result section.

![Converter Image](/img/converter_image.png)

### **TECHNOLOGIES USED**

The following technologies were used in the development of this project:

`Node`: A JavaScript runtime built on Chrome's V8 JavaScript engine that allows for server-side scripting.

`Express`: A fast and minimalist web framework for Node.js used to create server applications.

`Node-Fetch`: A module that provides a simple and efficient way to make HTTP requests in Node.js environments. It allows to fetch resources from remote servers.

### EXTERNAL API CONSUME:

This application consumes an external API to fetch currency conversion data. The API used is provided by [awesome-api](economia.awesomeapi.com.br) and offers currency conversion rates between different currency pairs.

The _GetCurrencyData_ function in the services folder sends a request to the API endpoint with the specified _fromCurrency_ and _toCurrency_ parameters. Upon receiving a successful response, it extracts relevant information such as the currency pair name, cotation, and the creation date of the data returning the following JSON body:

```
{
    "name": "Dólar Americano/Euro",
    "high": "0.9227",
    "create_date": "2024-04-07 18:03:05"
}
```

This retrieved data is then utilized within the application for currency conversion purposes. In case of any errors during the API request or data extraction process, appropriate error handling mechanisms are in place to ensure smooth functioning of the application.

### **AUTHORS**

-   Giovane Hashinokuti Iwamoto
-   Gustavo Serra Vasconcelos
-   Vinicius Marques de Melo
-   Everton de Oliveira