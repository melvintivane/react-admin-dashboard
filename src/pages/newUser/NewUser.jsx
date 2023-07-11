import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="Jonh77" />
            </div>
            <div className="newUserItem">
                <label>Fullname</label>
                <input type="text" placeholder="Jonh Smith" />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder="jonhsmith77@gmail.com" />
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder="Password" />
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="+258 84 207 4393" />
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder="Maputo | MZ" />
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other" />
                    <label for="other">Other</label>
                </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select name="active" id="active" className="newUserSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}
