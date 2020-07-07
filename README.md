### aws config
```shell:~/.aws/config
[profile c9]
role_arn=arn:aws:iam::<aws_account_id>:role/<role-name>
source_profile=default
region=ap-northeast-1
```

### Metadata
```
<ExposeHeader>x-amz-meta-filename</ExposeHeader>
<ExposeHeader>x-amz-meta-labels</ExposeHeader>
<ExposeHeader>x-amz-meta-capitalletter</ExposeHeader>
<ExposeHeader>x-amz-meta-username</ExposeHeader>
<ExposeHeader>x-amz-meta-description</ExposeHeader>
```
