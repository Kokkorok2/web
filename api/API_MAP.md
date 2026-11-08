# Topic APIs with /topic{n}/... prefixes (json-server)

Run:
```bash
json-server --watch db.json --routes routes.json --port 5174
```

Common query params:
- `_page`, `_limit` – pagination
- `_sort`, `_order` – sorting (e.g., `_sort=price,rating&_order=asc,desc`)
- `q` – full-text search
- field filters – `/resource?field=value`
- array includes – `/resource?tags_like=ai`

## Topic 1 – Crypto Portfolio Tracker
- `GET /topic1/assets` • `GET /topic1/assets/:id`
- `GET /topic1/transactions` • `GET /topic1/assets/:id/transactions`
- `GET /topic1/watchlist`
- Examples:
  - `/topic1/assets?_page=1&_limit=12&_sort=marketCap&_order=desc&q=eth`
  - `/topic1/transactions?assetId=1&_sort=date&_order=desc`

## Topic 2 – AI Prompt Marketplace
- `GET /topic2/prompts` • `GET /topic2/prompts/:id`
- `GET /topic2/authors` • `GET /topic2/orders` • `GET /topic2/reviews`
- `GET /topic2/prompts/:id/reviews`
- `POST /topic2/reviews`
- Examples:
  - `/topic2/prompts?_page=1&_limit=12&_sort=price&_order=asc&tags_like=seo`
  - `/topic2/prompts?q=code`

## Topic 3 – SaaS Time Tracking
- `GET /topic3/projects` • `GET /topic3/projects/:id`
- `GET /topic3/time-entries` • `/topic3/projects/:id/time-entries`
- `GET /topic3/clients` • `GET /topic3/users`
- Examples:
  - `/topic3/time-entries?projectId=1&_sort=date&_order=desc`

## Topic 4 – IT Consulting
- `GET /topic4/services` • `GET /topic4/services/:id`
- `GET /topic4/cases` • `/topic4/services/:id/cases`
- `GET /topic4/team` • `POST /topic4/contacts`
- Examples:
  - `/topic4/cases?industry=FinTech&_sort=rating&_order=desc`

## Topic 5 – Online IT Courses
- `GET /topic5/courses` • `GET /topic5/courses/:id`
- `GET /topic5/instructors` • `GET /topic5/categories`
- `GET/POST /topic5/reviews` • `GET/POST /topic5/enrollments`
- Examples:
  - `/topic5/courses?_sort=rating&_order=desc&categoryId=1&q=JS`
  - `/topic5/courses/:id/reviews`

## Topic 6 – AI News Aggregator
- `GET /topic6/articles` • `GET /topic6/articles/:id`
- `GET /topic6/sources` • `GET /topic6/topics` • `GET /topic6/bookmarks`
- `/topic6/topics/:id/articles`
- Examples:
  - `/topic6/articles?_page=1&_limit=10&topicId=2&tags_like=ethics`

## Topic 7 – Dev Tools Showcase
- `GET /topic7/tools` • `GET /topic7/tools/:id`
- `GET /topic7/categories` • `GET /topic7/snippets`
- `/topic7/tools/:id/snippets`
- Examples:
  - `/topic7/tools?q=json&_sort=stars&_order=desc`

## Topic 8 – Crypto Exchange Simulator
- `GET /topic8/markets` • `GET /topic8/pairs`
- `GET/POST /topic8/orders` • `GET /topic8/trades` • `GET /topic8/balances`
- `/topic8/markets/:id/pairs` • `/topic8/pairs/:id/orders`
- Examples:
  - `/topic8/orders?status=open&_sort=date&_order=desc`
  - `/topic8/pairs?q=BTC`

## Topic 9 – Startup Job Board
- `GET /topic9/jobs` • `GET /topic9/jobs/:id`
- `GET /topic9/companies` • `GET/POST /topic9/applications`
- `/topic9/jobs/:id/applications`
- Examples:
  - `/topic9/jobs?q=frontend&tags_like=react&_sort=date&_order=desc`

## Topic 10 – Recipe Finder
- `GET /topic10/recipes` • `GET /topic10/recipes/:id`
- `GET /topic10/ingredients` • `GET /topic10/tags` • `GET/POST /topic10/favorites`
- `/topic10/tags/:id/recipes` (by tag)
- Examples:
  - `/topic10/recipes?time_lte=20&tagIds_like=vegetarian`
