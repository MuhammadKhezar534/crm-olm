start_date="2025-02-13"  # Change this to the first day of last month
end_date="2025-02-25"    # Change this to the last day of last month

while [ "$start_date" != "$(date -I -d "$end_date + 1 day")" ]; do
    git add .
    GIT_COMMITTER_DATE="$start_date 12:00:00" git commit --date "$start_date 12:00:00" -m "added structure"
    start_date=$(date -I -d "$start_date + 1 day")
done

git push origin master