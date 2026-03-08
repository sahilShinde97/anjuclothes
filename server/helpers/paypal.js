const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "ATyIb_oIGmoqY77YVZp6kBE12w0qZFfvmBHpAA1rHcvQbiDV5-HdjIoqbDbnk8twAR92H4MLmKkf1mcZ",
  client_secret:
    "EHHr2A-feT4N40yCNNEa-Z9eeQYgIcgshnB9emy5PB514MCE-oYI6xqwopZ6R_-_x_fphHEPLCz5q-rc",
});


module.exports = paypal;