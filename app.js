// Initialize Firebase with your Firebase project configuration.
const firebaseConfig = {
    apiKey: 'AIzaSyCTHc5uV9qLcOmpo_kZBAWs0DJ8dLPkxhE',
    authDomain: 'recruitmentcv-fe4aa.firebaseapp.com',
    databaseURL: 'https://recruitmentcv-fe4aa-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'recruitmentcv-fe4aa',
    storageBucket: 'recruitmentcv-fe4aa.appspot.com',
    messagingSenderId: '760673751902',
    appId: '1:760673751902:web:b539b37c3451264fe675cf'
};

firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database.
const database = firebase.database();

// Submit CV Form
const cvForm = document.getElementById('cvForm');
cvForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    // Add more form fields as needed.
    
    // Store the CV in the database.
    const cvData = {
        name: name,
        // Add more CV data fields here.
    };
    database.ref('cvs').push(cvData);
    cvForm.reset();
});

// Display Job Listings
const jobList = document.getElementById('jobList');
database.ref('jobListings').on('child_added', (snapshot) => {
    const job = snapshot.val();
    const li = document.createElement('li');
    li.textContent = `${job.title} - ${job.description}`;
    jobList.appendChild(li);
});

// Sample user authentication
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('User is signed in:', user.displayName);
    } else {
        console.log('No user is signed in.');
    }
});
