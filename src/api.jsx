import axios from 'axios';

const supabaseUrl = 'https://zsrzpuksbzimwhxqlddb.supabase.co';
const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzcnpwdWtzYnppbXdoeHFsZGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzMzExNTUsImV4cCI6MTk5NzkwNzE1NX0._rMLleWycKDfDSj0P633reCR2j-_nlN-uTgLcO5MTsM';

// Login API call
export const login = async (email, password) => {

    const { data } = await axios.post(`${supabaseUrl}/auth/v1/token?grant_type=password`, 
    {
      email,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
        apikey: supabaseApiKey,
        'Authorization': 'Bearer token'
      },
    });

    return data;
  
};

// Register API call
export const register = async (email, password , name) => {
  console.log('here1111')
    const { data } = await axios.post(`${supabaseUrl}/auth/v1/signup`, {
      email,
      password,
      name,
    }, {
      headers: {
        'Content-Type': 'application/json',
         'Authorization': 'Bearer token',
        apikey: supabaseApiKey,
      },
    })

    return data;
  
};
