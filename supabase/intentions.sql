-- Table definition for the prayer wall intentions
create table if not exists public.intentions (
    id uuid primary key default gen_random_uuid(),
    name text,
    message text not null,
    category text not null,
    anonymous boolean not null default false,
    status text not null default 'pending',
    prayer_count integer not null default 0,
    created_at timestamptz not null default now()
);

-- Helpful index for moderation queues
create index if not exists intentions_status_created_at_idx
    on public.intentions (status, created_at desc);

-- Optional constraint to keep category tidy
create or replace function public.enforce_intentions_category()
returns trigger as $$
begin
    if new.category not in ('gratitude', 'petition', 'youth', 'family') then
        raise exception 'Invalid category value %', new.category;
    end if;
    return new;
end;
$$ language plpgsql;

drop trigger if exists enforce_intentions_category_trigger on public.intentions;
create trigger enforce_intentions_category_trigger
    before insert or update on public.intentions
    for each row execute function public.enforce_intentions_category();

-- Suggested RLS configuration (optional if only accessed with service role)
alter table public.intentions enable row level security;

-- Allow service role (used by the Next.js backend) to use full access.
drop policy if exists "Service role full access" on public.intentions;
create policy "Service role full access"
    on public.intentions
    using (auth.role() = 'service_role')
    with check (auth.role() = 'service_role');

-- If you plan to expose read-only access with anon key, keep only approved rows.
drop policy if exists "Anon read approved intentions" on public.intentions;
create policy "Anon read approved intentions"
    on public.intentions
    for select
    using (status = 'approved');
