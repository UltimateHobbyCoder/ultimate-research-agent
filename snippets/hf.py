import requests

API_URL = "https://router.huggingface.co/fireworks-ai/inference/v1/chat/completions"
headers = {
    "Authorization": "Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxx",
}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

response = query({
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Describe this image in one sentence."
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg"
                    }
                }
            ]
        }
    ],
    "model": "accounts/fireworks/models/llama4-scout-instruct-basic"
})

print(response["choices"][0]["message"])