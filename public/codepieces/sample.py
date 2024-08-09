from mayavi import mlab
import pandas as pd
import numpy as np

df = pd.read_csv('/Users/kiarachau/Desktop/snacks.csv')

def get_points(val, arr):
    for i, elem in enumerate(arr):
        if val > elem:
            return 10-i
    return 0
        
def nutri_score(row):
    negatives = 0
    negatives += get_points(row['Energy density (kcal/100g)']*4.184, [3350,3015,2680,2345,2010,1675,1340,1005,670,335]) # converted to kJ
    negatives += get_points(row['Saturated Fats (g per 100g)'], [10,9,8,7,6,5,4,3,2,1])
    negatives += get_points(row['Sugar (g per 100g)'], [45,40,36,31,27,22.5,18,13.5,9])
    negatives += get_points(row['Salt (g per 100g)']* 400, [900,810,720,630,540,450,360,270,180,90]) # converted to sodium in mg

    positives = 0
    fibre = row['Fibre (g per 100g)']
    if fibre > 0.7:
        if fibre > 3.5:
            positives += 5
        elif fibre > 2.8:
            positives += 4
        elif fibre > 2.1:
            positives += 3
        elif fibre > 1.4:
            positives += 2
        else:
            positives += 1
    protein = row['Protein (g per 100g)']
    if protein > 1.6:
        if protein > 8:
            positives += 5
        elif protein > 6.4:
            positives += 4
        elif protein > 4.8:
            positives += 3
        elif protein > 3.2:
            positives += 2
        else:
            positives += 1

    return negatives - positives

def classify_nutriscore(score):
    if score >= 19:
        return 'E'
    if score >= 11:
        return 'D'
    if score >= 3:
        return 'C'
    if score >= 0:
        return 'B'
    else:
        return 'A'

def get_nutriletter(row):
    return classify_nutriscore(nutri_score(row))

df['Nutri-Score (Numerical Value)'] = df.apply(lambda x: nutri_score(x), axis=1) 
df['Nutri-Score'] = df.apply(lambda x: get_nutriletter(x), axis=1)
df

# Define category colors
category_colors2 = {
    'A': 1,    # darkgreen
    'B': 0.99,      # green
    'C': 0.98,   # gold
    'D': 0.97,   # orange
    'E': 0.96       # red
}

# Map colors based on categories
colors = [category_colors2[cat] for cat in df['Nutri-Score']]

# Create a Mayavi figure
fig = mlab.figure(size=(800, 600))

# Plot the scatter points
points = mlab.points3d(df['Saturated Fats (g per 100g)'], df['Sugar (g per 100g)'], df['Protein (g per 100g)'],colors,
                       scale_factor=2, colormap='RdYlGn',vmin=0.96,vmax=1)


mlab.colorbar(orientation='vertical', nb_labels=0)

# Set labels for the axes
mlab.xlabel('Saturated Fats (g per 100g)')
mlab.ylabel('Sugar (g per 100g)')
mlab.zlabel('Protein (g per 100g)')

# Customize the view angle (optional)
mlab.view(azimuth=45, elevation=45, distance='auto')

# Show the plot
mlab.show()
