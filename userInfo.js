let userList = users

let container = document.getElementById("container")

// console.log(userList)



userList.forEach(function(user){

    let userGet = `
    <div>
    <h3>Name:${user.name}</h3>
    <p>Username:${user.username}</p>
    <p>Phone: ${user.phone}</p>
    <p>email: ${user.email}</p>
    <p>Website: ${user.website}</p>
    <h4>Address:</h4>
    <p>Street: ${user.address.street}</p>
    <p>Suite: ${user.address.suit}</p>
    <p>City: ${user.address.city}</p>
    <p>Zip Code: ${user.address.zipcode}</p>
    <h4>Geo</h4>
    <p>latitude: ${user.address.geo.lat}</p>
    <p>longitude: ${user.address.geo.lng}</p>
    <img src="http://maps.googleapis.com/maps/api/staticmap?center=${user.address.geo.lat},${user.address.geo.lng}&zoom=5&size=200x200&sensor=false">
    <h4>Company</h4>
    <p>Name: ${user.company.name}</p>
    
    </div>
    `
    container.innerHTML += userGet
})


