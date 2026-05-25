# NicholasAlexMonaco.com

A small static personal website for Nicholas Alex Monaco.

## HTTPS setup

This site is intended to be served at `https://nicholasalexmonaco.com/`.

If a browser reports that the site is not secure, check the GitHub Pages
settings for `Racingman123/NicholasAlexMonaco.com`:

1. Go to **Settings > Pages**.
2. Confirm the custom domain is `nicholasalexmonaco.com`.
3. Wait for GitHub Pages to finish issuing the HTTPS certificate.
4. Enable **Enforce HTTPS**.

The apex DNS records should point to GitHub Pages:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

The `www` host should be a CNAME to `racingman123.github.io`.
