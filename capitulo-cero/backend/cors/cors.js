const allowOrigins = [process.env.CORS_FRONT]

export const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('CORS policy error: Origin not allowed'))
    }
  },
  credentials: true
}
