const AWS = require("@aws-sdk/client-s3");

const s3 = new AWS.S3();
const gm = require("gm");
const NEW_SIZE_PX = 480;

exports.convertImage = async (event) => {
  const Key = decodeURIComponent(
    event.Records[0].s3.object.key.replace(/\+/g, " ")
  );
  const s3Object = await s3.getObject({
    Bucket: event.Records[0].s3.Bucket.name,
    Key,
  });

  // CONVERT IMAGE
  const data = await resizeImage(s3Object.Body);

  // INSERT NEW REPOSITORIO
  const result = s3.putObject({
    Bucket: process.env.DESTINATION_BUCKETNAME,
    Key,
    ContentType: "image/jpg",
    Body: data,
    ACL: "public-read",
  });

  console.log("============ :", result);
};

const resizeImage = async (buffer) => {
  return new Promise((resolve, reject) => {
    gm(buffer)
      .resize(NEW_SIZE_PX, NEW_SIZE_PX)
      .toBuffer(".jpg", function (err, data) {
        if (err) return reject(err);
        resolve(data);
      });
  });
};
