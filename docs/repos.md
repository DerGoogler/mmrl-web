# Repos

## Format

```json
{
    "last_update": "number",
    "name": "url",
    "website": "url",
    "support": "url",
    "donate": "url",
    "submitModule": "url",
    "modules": [
        {
            "id": "string",
            "name": "string",
            "version": "string or number",
            "versionCode": "number",
            "author": "string",
            "description": "string",
            "valid": "boolean",
            "download": "url",
            "last_update": "number",
            "readme": "url",
            "stars": "number",
            "about": {
                "source": "url",
                "issues": "url"
            },
            "mmrl": {
                "cover": "url",
                "logo": "url",
                "screenshots": "string array",
                "categories": "string array"
            },
            "fox": {
                "minApi": "number",
                "maxApi": "number",
                "minMagisk": "number",
                "needRamdisk": "boolean",
                "support": "url",
                "donate": "url",
                "config": "any",
                "changeBoot": "boolean",
                "mmtReborn": "boolean"
            }
        },
    ]
}
```