categories = []
category_data = open("categories.txt", mode="r", encoding="UTF-8", errors="replace")
for top_dir in category_data:
    top_dir = top_dir.split('[1].')
    if top_dir[0] == "":

    categories.append(top_dir)

category_data.close()

print(categories)
