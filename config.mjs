export const config = {
    "sessions": [
        {
            "cookie": `uuid_guest=45d889f4-303d-476d-b513-1fc18b2b0da1; safesearch_a3e980243a9887feebbbd6c8519610f9f1bff133361da2ec6b663121d2a7499e=Off; AF_DEFAULT_MEASUREMENT_STATUS=true; _ga=GA1.1.1843393937.1712655574; afUserId=36a6a3ee-26e5-407b-a62a-f0ff0c6c714c-p; youchat_personalization=true; youchat_smart_learn=true; stytch_session=25KuU1bfqSCRH53sjKiw44AkT7uFwdxV0xBOZFe3uwVV; _gcl_au=1.1.566370155.1727868208; guest_has_seen_legal_disclaimer=true; FPAU=1.1.566370155.1727868208; ph_phc_TXdpocbGVeZVm5VJmAsHTMrCofBQu3e0kN8HGMNGTVW_posthog=%7B%22distinct_id%22%3A%220192f628-6caf-74b4-ad33-50143e86f4cf%22%2C%22%24sesid%22%3A%5B1730706697459%2C%220192f628-6cae-746b-9448-22c0fe88b850%22%2C1730706697389%5D%7D; incognito=false; _clck=1eubevt%7C2%7Cfrz%7C0%7C1560; FPLC=q%2FhilTVaJQjJQh7w8WDv4kYfGK5tfHc2sARcORintn6MxDN3mJB5LirwpoXPPwQ27h4iti7cxZvefXhJMLKtOm4Rd1ZsDX3IKZzuzYRaiEhqdeYtfXnKUSVSiFBMSg%3D%3D; total_query_count=104; _ga_2N7ZM9C56V=GS1.1.1735042040.51.1.1735043665.0.0.545891561; _clsk=g7x03m%7C1735043673643%7C3%7C1%7Cq.clarity.ms%2Fcollect; ld_context=%7B%22kind%22%3A%22user%22%2C%22key%22%3A%2245d889f4-303d-476d-b513-1fc18b2b0da1%22%2C%22email%22%3A%22huang3303345691%40gmail.com%22%2C%22userCreatedAt%22%3A%222024-04-09T06%3A02%3A02Z%22%2C%22country%22%3A%22TW%22%2C%22userAgent%22%3A%22Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F131.0.0.0%20Safari%2F537.36%20Edg%2F131.0.0.0%22%2C%22secUserAgent%22%3A%22%5C%22Microsoft%20Edge%5C%22%3Bv%3D%5C%22131%5C%22%2C%20%5C%22Chromium%5C%22%3Bv%3D%5C%22131%5C%22%2C%20%5C%22Not_A%20Brand%5C%22%3Bv%3D%5C%2224%5C%22%22%7D; youpro_subscription=true; you_subscription=youpro_standard_month; daily_query_count=0; daily_query_date=Wed%20Dec%2025%202024; ab.storage.deviceId.dcee0642-d796-4a7b-9e56-a0108e133b07=g%3A402efeba-e8ed-a834-7451-8bb9dfc0a486%7Ce%3Aundefined%7Cc%3A1712654380368%7Cl%3A1735089153916; ab.storage.userId.dcee0642-d796-4a7b-9e56-a0108e133b07=g%3Auser-live-1e8e0338-023b-4b91-b77c-b9e990deb2cd%7Ce%3Aundefined%7Cc%3A1712654391068%7Cl%3A1735089153916; ab.storage.sessionId.dcee0642-d796-4a7b-9e56-a0108e133b07=g%3A88bc728b-91e3-fa2f-19dd-be010ce50b09%7Ce%3A1735090953922%7Cc%3A1735089153915%7Cl%3A1735089153922; ai_model=claude_3_opus; stytch_session_jwt=eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3ay1saXZlLTY1NGE5ODBiLTYzODgtNGI1My04NzgyLTU4ZmRmYWRjZjQ3MCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJvamVjdC1saXZlLTlkZWE3ZGI1LTJlMTUtNGE3ZC1iYjFmLTJjYjg0ODBlYTliMCJdLCJhdXRoMF9pZCI6bnVsbCwiZGVzY29wZV9pZCI6bnVsbCwiZXhwIjoxNzM1MDg5ODE1LCJodHRwczovL3N0eXRjaC5jb20vc2Vzc2lvbiI6eyJpZCI6InNlc3Npb24tbGl2ZS1mOTcyODM3ZS0wZjZmLTRmZTEtOWYxNC1kNGMyYTM3OGQxMTEiLCJzdGFydGVkX2F0IjoiMjAyNC0wOC0xNVQwMTo1MjozMloiLCJsYXN0X2FjY2Vzc2VkX2F0IjoiMjAyNC0xMi0yNVQwMToxODozNVoiLCJleHBpcmVzX2F0IjoiMjAyNS0wMy0yNVQwMToxMjozNFoiLCJhdHRyaWJ1dGVzIjp7InVzZXJfYWdlbnQiOiIiLCJpcF9hZGRyZXNzIjoiIn0sImF1dGhlbnRpY2F0aW9uX2ZhY3RvcnMiOlt7InR5cGUiOiJvYXV0aCIsImRlbGl2ZXJ5X21ldGhvZCI6Im9hdXRoX2dvb2dsZSIsImxhc3RfYXV0aGVudGljYXRlZF9hdCI6IjIwMjQtMDgtMTVUMDE6NTI6MzJaIiwiZ29vZ2xlX29hdXRoX2ZhY3RvciI6eyJpZCI6Im9hdXRoLXVzZXItbGl2ZS02YzBlNDk2ZS1mYjdhLTQ1MzQtYTIzMC1hZmU3YTA5YzFlYmYiLCJwcm92aWRlcl9zdWJqZWN0IjoiMTAzMjcwMzgxNzY5MjA5MjQ0NTgxIn19XX0sImlhdCI6MTczNTA4OTUxNSwiaXNzIjoic3R5dGNoLmNvbS9wcm9qZWN0LWxpdmUtOWRlYTdkYjUtMmUxNS00YTdkLWJiMWYtMmNiODQ4MGVhOWIwIiwibmJmIjoxNzM1MDg5NTE1LCJzdWIiOiJ1c2VyLWxpdmUtMWU4ZTAzMzgtMDIzYi00YjkxLWI3N2MtYjllOTkwZGViMmNkIiwidXNlciI6eyJjcmVhdGVkX2F0IjoiMjAyNC0wNC0wOVQwNjowMjowMloiLCJlbWFpbCI6Imh1YW5nMzMwMzM0NTY5MUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmFtaWx5X25hbWUiOiLpo44iLCJnaXZlbl9uYW1lIjoi6aOOIiwibmFtZSI6Imh1YW5nMzMwMzM0NTY5MUBnbWFpbC5jb20iLCJuaWNrbmFtZSI6Imh1YW5nMzMwMzM0NTY5MSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNkJpdEdMR2RCakZTUGFXNHAzZDRWZzY3OGtHMkZwd3l2eXd2cFp6THNLRlNtZVlrPXM5Ni1jIiwicHJvdmlkZXJzIjpbImdvb2dsZSJdLCJzdHl0Y2hfdXNlcl9pZCI6InVzZXItbGl2ZS0xZThlMDMzOC0wMjNiLTRiOTEtYjc3Yy1iOWU5OTBkZWIyY2QiLCJzdWIiOiJ1c2VyLWxpdmUtMWU4ZTAzMzgtMDIzYi00YjkxLWI3N2MtYjllOTkwZGViMmNkIn19.VNLE3AU9e45znGohrm_rRs_bzwb6f_Drsf0Ik20miO0gtiHlrJb5Ye-BHY8WVt5-gT1me_NNcwg4W53CvonpC1syHie8lIQS-MjggiAodpxMnYUp0R5QSEEoyFEdo5JKGb4YMQG3flnekV94KV4QrVGVKuJNfqIDBxOBCu489hWiFx3ve45v-5bzlwkhX9L9tW2TiImywQVUgzfK7Yl1chlCRc_rnmn27u1NJsPTUAc2dqlfIEswgwnGaZCBqmtW1gY64R-DNruJrf-1n5QU_AUwI7MOnRdi2AfbROPZzJ6ElEzcDe0-g3-Ki8kakprEPl2kphZcCjAN_6ZfcMxw9A`,
        }
    ]
}