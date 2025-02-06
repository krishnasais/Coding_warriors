from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# Sample data structure to store complaints
complaints = []

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit_complaint', methods=['POST'])
def submit_complaint():
    if request.method == 'POST':
        User_ID = request.form['User_ID']
        room_number = request.form['room_number']
        complaint = request.form['complaint']
        
        # Add the complaint to the list of complaints
        complaints.append({'User_ID': User_ID, 'room_number': room_number, 'complaint': complaint})
        
        # Redirect to the home page after submission
        return redirect('/')
    else:
        return 'Method not allowed'

@app.route('/complaints')
def view_complaints():
    return render_template('complaints.html', complaints=complaints)

if __name__ == '__main__':
    app.run(debug=True)
