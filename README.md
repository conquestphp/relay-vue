# Conquest Relay
[![npm version](https://badge.fury.io/js/conquest-relay.svg)](https://badge.fury.io/js/conquest-relay)

Access backend-driven translations and messages using dot notation and with parameters.

## Installation
You can install the package via npm:

```bash
npm i conquest-relay
```

## Usage

```javascript
import __ from 'conquest-relay';

__('message.welcome', { name: 'Joshua' })
```

It's recommended you globally provide this in your Vue config so you do not need to import it in every file.

```javascript
import __ from 'conquest-relay';

app.config.globalProperties.__ = __;
```

## Credits

- [Joshua Wallace](https://github.com/jdw5)
- [All Contributors](../../contributors)

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.