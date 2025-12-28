# Google Sheets – Azure DevOps Tracker

A Google Apps Script project that integrates Google Sheets with Azure DevOps
to fetch work items and related pull requests.

## Features
- Fetch work items by ID
- Auto-detect linked PRs
- Show PR status (Active / Completed / Conflicts)
- Sprint-based sheet detection
- Secure authentication using Script Properties

## Setup
1. Open Google Sheets → Extensions → Apps Script
2. Paste files from `src/`
3. Set Script Properties:
   - AZURE_ORG
   - AZURE_PROJECT
   - AZURE_PAT
4. Use custom functions in Sheets

## Tech Stack
- Google Apps Script
- Azure DevOps REST APIs
- Google Sheets RichText

## Disclaimer
No sensitive or organization-specific data is included.
