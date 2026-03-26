# add-rebates-link.ps1
# Adds a link to /heat-pumps/rebates-by-state in every state page's See Also section.
# Run from project root: .\add-rebates-link.ps1
#
# Strategy: Every state page has a "Back to Heat Pumps overview" link near the bottom.
# We insert the rebates-by-state link just above that line.

$stateDir = "src/app/heat-pumps/states"
$files = Get-ChildItem -Path $stateDir -Recurse -Filter "page.tsx"

$anchor = '← Back to Heat Pumps overview'

$snippet = @'
          <p className="text-sm text-gray-600 mt-4">
            See how this state compares →{" "}
            <Link
              href="/heat-pumps/rebates-by-state"
              className="text-brand-600 hover:underline"
            >
              Heat Pump Rebates by State (2026)
            </Link>
          </p>
'@

$updated = 0
$skipped = 0
$notFound = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Skip if already has the link
    if ($content -match 'rebates-by-state') {
        Write-Host "SKIP (already has link): $($file.FullName)" -ForegroundColor Yellow
        $skipped++
        continue
    }
    
    # Find the anchor line
    if ($content -match [regex]::Escape($anchor)) {
        # Insert snippet before the "Back to Heat Pumps" center div
        $insertBefore = '      <div className="mt-6 text-center">'
        
        if ($content -match [regex]::Escape($insertBefore)) {
            # Find the LAST occurrence (in the disclaimer section)
            $lastIndex = $content.LastIndexOf($insertBefore)
            $newContent = $content.Insert($lastIndex, "$snippet`n")
            Set-Content -Path $file.FullName -Value $newContent -NoNewline
            Write-Host "UPDATED: $($file.FullName)" -ForegroundColor Green
            $updated++
        } else {
            Write-Host "NO INSERT POINT: $($file.FullName)" -ForegroundColor Red
            $notFound++
        }
    } else {
        Write-Host "NO ANCHOR: $($file.FullName)" -ForegroundColor Red
        $notFound++
    }
}

Write-Host ""
Write-Host "Done. Updated: $updated | Skipped: $skipped | Failed: $notFound" -ForegroundColor Cyan
