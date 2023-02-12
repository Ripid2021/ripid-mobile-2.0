# Generate keystore
keytool -genkeypair -v -storetype PKCS12 -keystore release.keystore -alias release -keyalg RSA -keysize 2048 -validity 10000
___pass=123456___

# Convert keystore file to base64
openssl base64 < release.keystore  | tr -d '\n' | tee release.keystore.base64.txt

# Convert mobileprovision file to base64 (Pass 123456)
openssl base64 < Ripid_Staging_Profile.mobileprovision | tr -d '\n' | tee profile.base64.txt


# Env file to base64
openssl base64 < .env  | tr -d '\n' | tee .env.base64.txt

# Base64 to 
echo $ENV_BASE64 | base64 --decode >> .env.decode