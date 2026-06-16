# Deploy Runbook

Manual steps for launching the MoonLeaf AB home page at `https://www.moonleafearth.com`. These
touch live Vercel, DNS, and Resend infrastructure, so they are performed by hand — the repo only
documents and configures them.

1. **Create the Vercel project** from `moonleaf-earth/moonleaf-site` in team
   `team_aqHuxGyG4uG3XWcY6XgmAumV`. Use framework preset **Next.js** and set the root directory to
   the repo root. Do not set a custom build command.
2. **Set environment variables** in Vercel for both **Production** and **Preview**:
   `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
3. **Add the domains** in the project's Domains tab: `www.moonleafearth.com` (primary) and the apex
   `moonleafearth.com` configured to redirect to `www`.
4. **DNS**: in the `moonleafearth.com` registrar's DNS settings, create
   `CNAME www → cname.vercel-dns.com` (same pattern as the project subdomains), then configure the
   apex `moonleafearth.com → www` redirect.
5. **Verify the sending domain** for `CONTACT_FROM_EMAIL` in Resend — add the SPF and DKIM records
   Resend provides to the `moonleafearth.com` DNS so outgoing contact mail is authenticated.
6. **Smoke-test after deploy**: submit the contact form once and confirm the email arrives at
   `CONTACT_TO_EMAIL`.
