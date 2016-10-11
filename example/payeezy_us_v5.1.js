var Payeezy = function() {
    function e(e) {
        var t = {
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard: /^5[1-5][0-9]{14}$/,
            amex: /^3[47][0-9]{13}$/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}$/
        };
        for (var n in t) {
            if (t[n].test(e)) {
                return n
            }
        }
    }

    function t() {
        var e = [];
        var t = document.getElementsByTagName("input");
        var n = document.getElementsByTagName("select");
        for (i = 0; i < t.length; i++) {
            var r = t[i];
            var s = r.getAttribute("payeezy-data");
            if (s) {
                e[s] = r.value
            }
        }
        for (i = 0; i < n.length; i++) {
            var r = n[i];
            var s = r.getAttribute("payeezy-data");
            if (s) {
                e[s] = r.value
            }
        }
        return e
    }
    return {
        createToken: function(e) {
            var n = "api-cert.payeezy.com";
            this["clientCallback"] = e;
            // var r = t();
            var i = 0;
            var s = {};
            var o = 0;
            var u = [];
            if (!this.apikey) {
                i = 400;
                u[o] = {
                    description: "Please set the API Key"
                };
                o++
            }
            if (!this.js_security_key) {
                i = 400;
                u[o] = {
                    description: "Please set the js_security_key"
                }
            }
            if (!this.ta_token) {
                i = 400;
                u[o] = {
                    description: "Please set the ta_token"
                }
            }
            if (!this.auth) {
                i = 400;
                u[o] = {
                    description: "Please set auth value"
                }
            }
            if (u.length > 0) {
                s["error"] = {
                    messages: u
                };
                e(i, s);
                return false
            }
            var a = "https://" + n + "/v1/securitytokens?apikey=" + this.apikey + "&js_security_key=" + this.js_security_key + "&callback=Payeezy.callback&auth=" + this.auth + "&ta_token=" + this.ta_token + "&type=FDToken&credit_card.type=" + this.card_type + "&credit_card.cardholder_name=" + this.cardholder_name + "&credit_card.card_number=" + this.cc_number + "&credit_card.exp_date=" + this.exp_date + "&credit_card.cvv=" + this.cvv_code + "&currency=" + this.currency + "&billing_address.city=" + this.city + "&billing_address.country=" + this.country + "&billing_address.phone.number=" + this.number + "&billing_address.street=" + this.street + "&billing_address.state_province=" + this.state_province + "&billing_address.zip_postal_code=" + this.zip_postal_code;
            var f = document.createElement("script");
            f.src = a;
            document.getElementsByTagName("head")[0].appendChild(f)
        },
        setApiKey: function(e) {
            this["apikey"] = e
        },
        setJs_Security_Key: function(e) {
            this["js_security_key"] = e
        },
        setTa_token: function(e) {
            this["ta_token"] = e
        },
        setAuth: function(e) {
            this["auth"] = e
        },
        setCurrency: function(e) {
            this["currency"] = e
        },
        setCardType: function(e) {
            this["card_type"] = e
        },
        setExpDate: function(e) {
            this["exp_date"] = e
        },
        setCardholderName: function(e) {
            this["cardholder_name"] = e
        },
        setCCNumber: function(e) {
            this["cc_number"] = e
        },
        setCVVCode: function(e) {
            this["cvv_code"] = e
        },
        setCity: function(e) {
            this["city"] = e
        },
        setCountry: function(e) {
            this["country"] = e
        },
        setPhoneNumber: function(e) {
            this["number"] = e
        },
        setStreet: function(e) {
            this["street"] = e
        },
        setState: function(e) {
            this["state_province"] = e
        },
        setZipCode: function(e) {
            this["zip_postal_code"] = e
        },
        callback: function(e) {
            this["clientCallback"](e.status, e.results)
        }
    }
}();

// module.exports = Payeezy();
