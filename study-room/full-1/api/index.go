/// Go package
package main

/// Go import
// before install first run 'go mod init example.com/m' to generate a go.mod file that saves the third-party libraries we require.
// to install use 'go get...' or 'go get -u ...' to make sure everything updated.
import (
	"database/sql"  // Go core package for handling SQL-based database communication.
	"encoding/json" // Go core package for handling JSON data.
	"fmt"           // for logging errors and printing messaging
	"log"           // for logging errors and printing messaging
	"net/http"      // a Go HTTP package for handling HTTP requesting when creating GO APIs

	guuid "github.com/google/uuid" // generate uuid for user id
	"github.com/gorilla/mux"       // for URL matcher and routing. It helps in implementing request routers and match each incoming request with its matching handler.

	"github.com/lib/pq"
	_ "github.com/lib/pq" // a Go PostgreSQL driver for handling the database/SQL package.

	// The bcrypt hashing function allows us to build a password security platform that scales with computation power and always hashes every password with a salt.
	"golang.org/x/crypto/bcrypt"

	"time"
)

/// Postgre DB Connection
const (
	DB_USER     = "postgres"
	DB_PASSWORD = "bossb19"
	DB_NAME     = "full-1"
)

// DB set up
func setupDB() *sql.DB {
	dbinfo := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable", DB_USER, DB_PASSWORD, DB_NAME)
	db, err := sql.Open("postgres", dbinfo)

	checkErr(err)

	return db
}

// tables structures
type AdminUser struct {
	userID       string      `json:"user_id"`
	username     string      `json:"username"`
	email        string      `json:"email"`
	created_date time.Time   `json:"created_date"`
	last_login   pq.NullTime `json:"last_login"`
}

type JsonResponse struct {
	Type    string      `json:"type"`
	Data    []AdminUser `json:"data"`
	Message string      `json:"message"`
}

// Function for handling messages
func printMessage(message string) {
	fmt.Println("")
	fmt.Println(message)
	fmt.Println("")
}

// Function for handling errors
func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}

/// Get all
// response and request handlers
func GetAllAdminUser(w http.ResponseWriter, r *http.Request) {
	db := setupDB()

	printMessage("Getting admin users...")

	// Get all from table
	rows, err := db.Query("SELECT id,user_id,username,email,created_date,last_login FROM admin.users")

	// check errors
	checkErr(err)

	// var response []JsonResponse
	var adminUsers []AdminUser

	// Foreach
	for rows.Next() {
		var id int
		var user_id string
		var username string
		var email string
		var created_date time.Time
		var last_login pq.NullTime

		err = rows.Scan(&id, &user_id, &username, &email, &created_date, &last_login)

		// check errors
		checkErr(err)

		adminUsers = append(adminUsers, AdminUser{userID: user_id, username: username, email: email, created_date: created_date, last_login: last_login})
	}

	var response = JsonResponse{Type: "success", Data: adminUsers, Message: "Success"}

	json.NewEncoder(w).Encode(response)
}

/// Get by ID
// response and request handlers
func GetAdminUserByID(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)

	userID := params["userID"]

	var response = JsonResponse{}

	if userID == "" {
		response = JsonResponse{Type: "error", Message: "You are missing userID parameter."}
	} else {
		db := setupDB()

		printMessage("Getting admin with ID: " + userID)

		_, err := db.Exec("SELECT * FROM admin.users where user_id = $1", userID)

		// check errors
		checkErr(err)

		response = JsonResponse{Type: "success", Message: "Success"}
	}

	json.NewEncoder(w).Encode(response)
}

/// Create
// response and request handlers
func CreateAdminUser(w http.ResponseWriter, r *http.Request) {
	uuid := guuid.New()     // generate new uuid using package imported
	userID := uuid.String() // change the generated uuid to string
	username := r.FormValue("username")
	email := r.FormValue("email")

	password := r.FormValue("password")
	hashedPass, _ := HashPassword(password)

	var response = JsonResponse{}

	if username == "" {
		response = JsonResponse{Type: "error", Message: "You are missing username data."}
	} else if email == "" {
		response = JsonResponse{Type: "error", Message: "You are missing email data."}
	} else if password == "" {
		response = JsonResponse{Type: "error", Message: "You are missing password data."}
	} else {
		db := setupDB()

		printMessage("Inserting admin into DB")

		fmt.Println("Inserting new admin with ID: " + userID + ", name: " + username + ", email: " + email)

		var lastInsertID int
		err := db.QueryRow("INSERT INTO admin.users(user_id, username, password, email) VALUES($1, $2, $3, $4) returning id;", userID, username, hashedPass, email).Scan(&lastInsertID)

		// check errors
		checkErr(err)

		response = JsonResponse{Type: "success", Message: "Success"}
	}

	json.NewEncoder(w).Encode(response)
}

// hashing password with bcrypt
func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

/// Delete by id

// response and request handlers
func DeleteAdminUserByID(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)

	userID := params["userID"]

	var response = JsonResponse{}

	if userID == "" {
		response = JsonResponse{Type: "error", Message: "You are missing userID parameter."}
	} else {
		db := setupDB()

		printMessage("Deleting admin from DB")

		_, err := db.Exec("DELETE FROM admin.users where user_id = $1", userID)

		// check errors
		checkErr(err)

		response = JsonResponse{Type: "success", Message: "Success"}
	}

	json.NewEncoder(w).Encode(response)
}

/// Delete all movies
// response and request handlers
func DeleteAllAdminUser(w http.ResponseWriter, r *http.Request) {
	db := setupDB()

	printMessage("Deleting all admin...")

	_, err := db.Exec("DELETE FROM admin.users")

	// check errors
	checkErr(err)

	printMessage("All admin have been deleted successfully!")

	var response = JsonResponse{Type: "success", Message: "Success"}

	json.NewEncoder(w).Encode(response)
}

/// Go main function
func main() {
	// fmt.Println("Hello World!")

	// Init the mux router
	router := mux.NewRouter()

	// Route handles & endpoints

	// Get all
	router.HandleFunc("/admin/users", GetAllAdminUser).Methods("GET")

	// Get by id
	router.HandleFunc("/admin/users/{userID}", GetAdminUserByID).Methods("GET")

	// Create
	router.HandleFunc("/admin/users", CreateAdminUser).Methods("POST")

	// Delete by id
	router.HandleFunc("/admin/users/{userID}", DeleteAdminUserByID).Methods("DELETE")

	// Delete all
	router.HandleFunc("/admin/users", DeleteAllAdminUser).Methods("DELETE")

	// serve the app
	// go run index.go
	fmt.Println("Server at 8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}
