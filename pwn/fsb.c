/* fsb.c */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[])
{
    char buf[100];
    char *secret;
    FILE *fp;

    secret = malloc(2000);
    printf("[+] secret = %p\n", secret);

    fp = fopen("/etc/passwd", "r");
    fread(secret, 1, 2000, fp);
    fclose(fp);
    printf("length = %ld\n", strlen(secret));

    strncpy(buf, argv[1], sizeof(buf));
    printf(buf);

    free(secret);
    return 0;
}
