#!/bin/bash

API="http://localhost:4741"
URL_PATH="/children"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "child": {
      "firstName": "'"${FIRSTNAME}"'",
      "dob": "'"${DOB}"'",
      "birthWeight": "'"${BIRTHWEIGHT}"'",
      "birthLength": "'"${BIRTHLENGTH}"'"
      }
    }'

echo
