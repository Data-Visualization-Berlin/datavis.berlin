---
# Title of the event
title: "{{ replace .Name "-" " " | title }}"
# Who organises the event (e.g. "Datavis Meetup Berlin", "Maptime Berlin", …)
organiser: ""
# Date and time the event takes place (format "2020-02-02T18:00:00+01:00")
date: {{ .Date }}
# Where the event takes place (address or "Online")
location: ""
# Link to more information / registration (e.g. the Meetup.com page)
link: ""
created_at: {{ now.Format "2006-01-02" }}
updated_at: {{ now.Format "2006-01-02" }}
# Short description of the event
description: ""
# Only events organised by "Datavis Meetup Berlin" get their own page on this site.
# - For "Datavis Meetup Berlin" events: outputs: ["html", "ical"], remove sitemap_exclude.
# - For all other (external) events: keep outputs: ["ical"] and sitemap_exclude: true.
outputs: ["ical"]
sitemap_exclude: true
---
