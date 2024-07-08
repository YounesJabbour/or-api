-- CreateEnum
CREATE TYPE "status" AS ENUM ('en_cours', 'en_attente', 'cloture');

-- CreateTable
CREATE TABLE "OrdreReparation" (
    "IDOR" SERIAL NOT NULL,
    "Jobno" INTEGER NOT NULL,
    "DateOR" DATE NOT NULL,
    "NumClient" INTEGER NOT NULL,
    "Departement" TEXT NOT NULL,
    "NumSite" INTEGER NOT NULL,
    "NumVeh" INTEGER NOT NULL,
    "Km" INTEGER NOT NULL,
    "NomReceptionnaire" TEXT NOT NULL,
    "Commentaire" TEXT,
    "CodeInterne" TEXT NOT NULL,
    "Statut" "status" NOT NULL,
    "Montant" DOUBLE PRECISION,
    "DateMaj" DATE NOT NULL,
    "Delai" INTEGER NOT NULL,

    CONSTRAINT "OrdreReparation_pkey" PRIMARY KEY ("IDOR")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "Nom" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Site" (
    "id" SERIAL NOT NULL,
    "Nom" TEXT NOT NULL,

    CONSTRAINT "Site_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicule" (
    "id" SERIAL NOT NULL,
    "Immatriculation" TEXT NOT NULL,

    CONSTRAINT "Vehicule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrdreReparation" ADD CONSTRAINT "OrdreReparation_NumClient_fkey" FOREIGN KEY ("NumClient") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdreReparation" ADD CONSTRAINT "OrdreReparation_NumSite_fkey" FOREIGN KEY ("NumSite") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdreReparation" ADD CONSTRAINT "OrdreReparation_NumVeh_fkey" FOREIGN KEY ("NumVeh") REFERENCES "Vehicule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
