import "../assets/css/Register.css";

function Register() {
  return (
    <section className="register-page">
      <div className="register-card">
        <h1>Student Registration</h1>
        <p>Please fill in the details below. Our team will contact you.</p>

        <form>
          <input type="text" placeholder="Student Name" required />
          <input type="text" placeholder="Parent Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Mobile Number" required />

          <select>
            <option>Select Class</option>
            <option>LKG</option>
            <option>UKG</option>
            <option>Grade 1+</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Register;
