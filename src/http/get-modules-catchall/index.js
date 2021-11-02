const arc = require('@architect/functions')
const fingerprints = require('fingerprint-handler')

exports.handler = arc.http.async(fingerprints)
