@component('mail::message')
# Introduction

The body of your message.
title: {{$title}}
URL : {{$url}}

@component('mail::button', ['url' => $url])
Click for details
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent