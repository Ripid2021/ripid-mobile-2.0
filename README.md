# Generate keystore
keytool -genkeypair -v -storetype PKCS12 -keystore release.keystore -alias release -keyalg RSA -keysize 2048 -validity 10000
___pass=123456___

# Convert keystore file to base64
openssl base64 < release.keystore  | tr -d '\n' | tee release.keystore.base64.txt

#