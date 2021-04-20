# Project made following this tutorial
# Tutorial https://www.youtube.com/watch?v=dam0GPOAvVI

from website import create_app

app = create_app()

# Only if we run this file, not import
if __name__ == '__main__': 
    app.run(debug=True)