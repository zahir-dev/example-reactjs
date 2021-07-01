import './style.css';

export default function Connect({
  token,
  slug
}) {

  const handleConnect = () => {
    const redirect_uri = window.location.origin;
    const client_id = '';
    const url = `https://developer.zahir.dev/oauth/authorize?redirect_uri=${redirect_uri}&client_id=${client_id}`;
    window.location.href = url;
  }

  const handleDisconnect = () => {
    window.location.href = '/';
  }

  if (token) {

    return (
      <div
        className="wrapper"
        style={{
          height: window.innerHeight
        }}
      >
        <h1>Terhubung</h1>
        <p>Slug</p>
        <h4>{slug}</h4>
        <p>Token</p>
        <h4>{token}</h4>
        <button
          style={{
            marginTop: 12
          }}
          onClick={handleDisconnect}
        >
          Disconnect
        </button>
      </div>
    )
  }

  return (
    <div
      className="wrapper"
      style={{
        height: window.innerHeight
      }}
    >
      <h1
        className="title"
      >
        Integration
      </h1>
      <button
        className="connect_button"
        onClick={handleConnect}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00035 0C12.4096 0 16 3.59035 16 8.00035C16 12.4096 12.4096 16 8.00035 16C3.59036 16 0 12.4096 0 8.00035C0 3.59035 3.59036 0 8.00035 0ZM11.1812 12.1263H4.34625L8.50404 5.51165H4.75573V3.87373H11.6849L7.46475 10.5826H11.1812V12.1263Z" fill="white" />
        </svg>

        <div
          style={{
            marginLeft: 6
          }}
        >
          Connect Zahir
        </div>
      </button>
    </div>
  )
}