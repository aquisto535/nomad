import User from "../models/User"

export const getjoin = (req, res) => res.render("join", {pageTitle:"Join" });
export const postjoin = async (req, res) => {
   
    const { name , username , email , password, password2, location } = req.body
    if(password !== password2){
      return res.status(400).render("join", {pageTitle:"Join", 
      errorMessage:"Password confirmation does not match." 
    })
    }
    const Exits = await User.exists({$or: [{username}, {email}]});
    if(Exits){
      return res.status(400).render("join", {pageTitle:"Join", 
      errorMessage:"This username/e-mail is already taken." 
    });
    }

    await User.create({
      name,
      username,
      email,
      password,
      location,
    })
    return res.redirect("/login")
  };
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login")
export const logout = (req, res) => res.send("logout")
export const see = (req, res) => res.send("See User")


