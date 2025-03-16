# start_date="2025-02-13"  # Change this to the first day of last month
# end_date="2025-02-25"    # Change this to the last day of last month

# while [ "$start_date" != "$(date -I -d "$end_date + 1 day")" ]; do
#     git add .
#     GIT_COMMITTER_DATE="$start_date 12:00:00" git commit --date "$start_date 12:00:00" -m "added structure"
#     start_date=$(date -I -d "$start_date + 1 day")
# done

# git push origin master

#!/bin/bash

start_date="2025-03-16"  # Change this to the first day of last month
end_date="2025-03-16"   # Change this to the last day of last month

while [ "$start_date" != "$(date -I -d "$end_date + 1 day")" ]; do
    echo " "
    git add .
    GIT_COMMITTER_DATE="$start_date 12:00:00" \
    git commit --allow-empty --date "$start_date 12:00:00" -m "removed extra file"

    # Move to the next day
    start_date=$(date -I -d "$start_date + 1 day")
done

git push origin master
