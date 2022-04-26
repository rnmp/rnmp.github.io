#!/usr/bin/env ruby

require 'date'

title = ARGV.join(' ')
slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

out_file = File.new("_posts/#{Date.today}_#{slug}.md", "w")
out_file.puts <<-HTML.chomp
---
title: #{title}
---


HTML

puts [
  title.empty? ? 'Untitled post' : "Post \"#{title}\"",
  "created.",
].join(' ')
out_file.close
