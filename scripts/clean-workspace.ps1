param(
  [switch]$RemoveNodeModules
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$safeTargets = @(
  ".next",
  ".open-next",
  ".wrangler",
  "out",
  "article-detail-check.png",
  "articles-home-check.png",
  "articles-list-check.png",
  "article-cta-check.png",
  "card-alignment-check.png",
  "category-check.png",
  "charging-check.png",
  "desktop-check.png",
  "desktop-loaded-check.png",
  "home-wide-check.png",
  "hero-typography-check.png",
  "mobile-check.png",
  "mobile-categories-check.png",
  "mobile-accessories-check.png",
  "mobile-guides-check.png",
  "powerbank-check.png",
  "product-check.png",
  "articles-wide-check.png",
  "privacy-check.png",
  "redesign-about-check.png",
  "redesign-about-dev-check.png",
  "redesign-home-check.png",
  "redesign-product-check.png",
  "redesign-product-dev-check.png",
  "hero-user-image-preview.png"
)

foreach ($target in $safeTargets) {
  if (Test-Path -LiteralPath $target) {
    Remove-Item -LiteralPath $target -Recurse -Force
    Write-Host "Removed $target"
  }
}

$legacyAssetPngs = Get-ChildItem -LiteralPath "public/assets" -Filter "*.png" -File -ErrorAction SilentlyContinue
foreach ($asset in $legacyAssetPngs) {
  Remove-Item -LiteralPath $asset.FullName -Force
  Write-Host "Removed $($asset.FullName)"
}

if ($RemoveNodeModules -and (Test-Path -LiteralPath "node_modules")) {
  Remove-Item -LiteralPath "node_modules" -Recurse -Force
  Write-Host "Removed node_modules"
}

$items = Get-ChildItem -Force | ForEach-Object {
  if ($_.PSIsContainer) {
    $size = (Get-ChildItem -LiteralPath $_.FullName -Recurse -Force -File -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum
  } else {
    $size = $_.Length
  }

  [PSCustomObject]@{
    Name = $_.Name
    Type = if ($_.PSIsContainer) { "dir" } else { "file" }
    MB = [math]::Round(($size / 1MB), 2)
  }
}

$items | Sort-Object MB -Descending | Format-Table -AutoSize
