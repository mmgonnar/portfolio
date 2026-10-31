# Projects snapshot

Fallback copy of the projects content, so the Projects section can render when the
backend is cold, asleep or unreachable.

**Supabase is the single source of truth. These files are generated output, never edit them by hand.**

## How these were generated

Captured on 2026-10-02 from the deployed backend, one request per locale, then
pretty printed with a 2 space indent so diffs stay readable:

```sh
curl -s "https://portfolio-backend-tarb.onrender.com/projects?lang=es" -o /tmp/es.json
curl -s "https://portfolio-backend-tarb.onrender.com/projects?lang=en" -o /tmp/en.json
node -e "const fs=require('fs');for(const l of ['es','en'])fs.writeFileSync('features/projects/data/projects-snapshot.'+l+'.json',JSON.stringify(JSON.parse(fs.readFileSync('/tmp/'+l+'.json','utf8')),null,2)+'\n')"
```

Once task 2.3 lands, this becomes:

```sh
npm run sync:content
```

## When to regenerate

After any edit to the `projects` table in Supabase, and before deploying. A stale
snapshot only shows while the API is unreachable, so drift is invisible until the
backend is down, which is exactly when it matters.

## Notes

- Shape matches the `GET /projects?lang=` response: a flat array of project objects.
- Not yet wired into any component. Consuming it is task 2.2 in the plan.
- Contains public portfolio content only, no credentials.
